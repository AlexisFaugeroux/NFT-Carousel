export const handleDeleteUser = (userToDelete, arr) => {
    const newUsers = arr.filter((user) => user !== userToDelete);
    return newUsers;
}