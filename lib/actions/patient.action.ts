export const createUser = async (user :CreateUserParams) => {
  fetch("XXXXXXXXXXXXXXXXXXXXXXXXXXX", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};
