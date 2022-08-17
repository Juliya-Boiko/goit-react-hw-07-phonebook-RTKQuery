import { useSelector, useDispatch } from 'react-redux/es/exports';
import { ContactsListItem, ContactsListButton } from './ContactsList.styled';
import { IoCloseOutline } from 'react-icons/io5';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { deleteItem } from 'redux/contacts';
import { getItemsValue, getFilterValue } from 'redux/selectors';
import { useGetAllContactsQuery, useDeleteContactMutation } from 'api/axios';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);
  // const items = useSelector(getItemsValue);

  const { data: items, error, isLoading } = useGetAllContactsQuery();
  const [deleteContact, result] = useDeleteContactMutation();

  
  // console.log(useDeleteContactMutation());
  // console.log(isLoading);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]) 

  // const normalizedValue = filter.toLowerCase();
  // const filteredArray = items.filter(option =>
  //  option.name.toLowerCase().includes(normalizedValue)
  // );

  // const deleteContact = contactId => {
  //   // dispatch(deleteItem(contactId));
    
  // };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <ul>
        {items && 
        items.map(({ id, name, phone }) => {
          return (
            <ContactsListItem key={id}>
              {name}: {phone}
              <ContactsListButton
                onClick={() => {
                  deleteContact(id);
                }}
              >
                <IoCloseOutline />
                Delete
              </ContactsListButton>
            </ContactsListItem>
          );
        })}
      </ul>
    </div>
  );
};
