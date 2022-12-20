//save data

export const saveData = async (userData) => {
    if (userData) {
      const url = " https://user-data-server.vercel.app/userData";
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = res.json();
      return data;
    }
  };
  
  //delete data
  export const deleteData = async (id) => {
    if (id) {
      const url = ` https://user-data-server.vercel.app/userData?id=${id}`;
      const res = await fetch(url, {
        method: "DELETE",
      });
      const data = res.json();
      return data;
    }
  };
  
  //edit data
  export const editData = async (id, data) => {
    const editedText = data;
    if (id) {
      const url = ` https://user-data-server.vercel.app/userData?id=${id}`;
      const res = await fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({editedText}),
      });
      const data = res.json();
      return data;
    }
  };
  