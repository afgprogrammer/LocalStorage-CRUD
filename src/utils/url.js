const add = (text) => {
  const url = new URLSearchParams(window.location.search);

  console.log(text);
  // 1 - we have search and age
  if (text.search && text.age) {
    // console.log("1-both");
    // check if we already have search in url
    if (url.has("search")) {
      url.set("search", url.get("search") + `,${text.search}`);
      url.set("age", text.age);
    } else {
      url.set("search", text.search);
      url.set("age", text.age);
    }
  } else if (text.search && !text.age) {
    // 2 - we have only search
    // console.log("2-only search ");
    if (url.has("search")) {
      url.set("search", url.get("search") + `,${text.search}`);
    } else {
      url.set("search", text.search);
    }
  } else if (!text.search && text.age) {
    // 3 - we have only age
    // console.log("3 - only age");
    url.set("age", text.age);
  } else {
    // 4 - we have none
    // console.log("4 - none");
    url.set("age", "");
    url.set("search", "");
  }

  window.location.search = url;
};

const remove = (key, text) => {
  const url = new URLSearchParams(window.location.search);

  if (key === "age") {
    url.delete("age");
  }

  if (key === "search") {
    let search = url.get("search").split(",");
    search = search.filter((s) => s != text).join(",");
    // if we didnt have any search left we should delete the search
    //  if not we will get /?search=
    // and it will interfere with our filter function
    if (search) {
      url.set(key, search);
    } else {
      url.delete(key);
    }
  }

  window.location.search = url;
};

const convertStringToUrlObject = () => {
  const currentSearch = window.location.search.replace("?", "");
  const items = currentSearch.split("&");

  let obj = {};

  items.forEach((item) => {
    const [key, value] = item.split("=");

    obj[key] = value;
  });

  return obj;
};

const convertObjectToString = () => {};

export { add, remove };
