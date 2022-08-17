import { useSelector } from 'react-redux/es/exports';
import { ContactsListItem, ContactsListButton } from './ContactsList.styled';
import { IoCloseOutline } from 'react-icons/io5';
import { useGetAllContactsQuery, useDeleteContactMutation } from 'api/axios';
import { Loader } from 'components/Loader/Loader';
export const ContactsList = () => {
  const { data: items, isLoading } = useGetAllContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const filter = useSelector(state => state.filter.filterValue);

  const filteredData = () => {
    if (items) {
      const filteredArray = items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
      return filteredArray;
    }
  };

  return (
    <div>
      {isLoading && <Loader />}
      <ul>
        {items && 
        filteredData().map(({ id, name, phone }) => {
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
