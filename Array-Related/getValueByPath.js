const data = {
  user: {
    profile: {
      name: "Maruf",
      contacts: [
        { type: "phone", value: "123456" },
        { type: "email", value: "maruf@email.com" },
      ],
    },
  },
};

function getValue(obj, path) {
  try {
    return path
      .replace(/\[(\d+)\]/g, ".$1")
      .split(".")
      .filter(Boolean)
      .reduce((acc, key) => acc[key], obj);
  } catch {
    return undefined;
  }
}

const result = getValue(data, "user.profile.contacts[1].value");
console.log(result);
