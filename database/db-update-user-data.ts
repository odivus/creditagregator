async function dbUpdateUserData(data: object) {
  try {
      const res = await fetch(`/api/user/update`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error( res.status.toString() );
      
      return res.ok;
      
  } catch (error) {
    console.error(error + ' Failed to update user data');
  }
}

export default dbUpdateUserData;