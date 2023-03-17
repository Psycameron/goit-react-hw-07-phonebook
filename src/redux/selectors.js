export const getContacts = state => state.phoneBook.contacts;
export const getIsLoading = state => state.phoneBook.contacts.isLoading;
export const getError = state => state.phoneBook.contacts.error;

export const getFilteredContacts = state => state.phoneBook.filter;
