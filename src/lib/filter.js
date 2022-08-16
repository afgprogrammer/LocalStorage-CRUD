import { getUsers } from "../utils/storage.js";

const handleFilter = (search, age) => {
  console.log(search, age);
  const users = getUsers();
  let ageLimits;
  if (age) {
    ageLimits = age.split("-");
  }
  let searchFilter = [];

  //    1 - we have both search and age
  if (search && age && search.length > 0 && ageLimits.length > 0) {
    console.log("1 - both search, age");
    search.forEach((item) => {
      const filtered = users.filter(
        (user) =>
          user.name === item ||
          user.email === item ||
          user.address === item ||
          (user.age >= ageLimits[0] && user.age < ageLimits[1])
      );
      searchFilter = [...filtered];
    });
  } else if (search && search.length > 0) {
    console.log("2 - only search");
    // 3 - we have only search
    search.forEach((item) => {
      const filtered = users.filter(
        (user) =>
          user.name === item || user.email === item || user.address === item
      );
      searchFilter = [...filtered];
    });
  } else if (age && ageLimits.length > 0) {
    console.log("3 - only age");

    // 2 - wa have only age
    searchFilter = users.filter(
      (user) => user.age >= ageLimits[0] && user.age < ageLimits[1]
    );
  } else {
    console.log("4 - we dont have filters");
    return searchFilter;
  }
  console.log(searchFilter);
  return searchFilter;
};

export { handleFilter };
