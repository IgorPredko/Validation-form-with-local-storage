const form1 = {
  name: "userForm",
  fields: [
    {
      control: "text",
      name: "userName",
      label: "Username",
      min: 3,
      max: 50,
    },
    {
      control: "text",
      name: "firstName",
      label: "First Name",
      min: 3,
      max: 50,
    },
    {
      control: "text",
      name: "lastName",
      label: "Last Name",
      min: 3,
      max: 50,
    },
    {
      control: "number",
      name: "age",
      label: "Age",
      min: 1,
      max: 100,
    },
    {
      control: "email",
      name: "email",
      label: "Email",
      min: 6,
      max: 50,
    },
    {
      control: "checkbox",
      name: "active",
      label: "Active",
    },
    {
      control: "textarea",
      name: "description",
      label: "Description",
      rows: 5,
    },
    {
      control: "select",
      name: "gender",
      label: "Gender",
      options: [
        {
          value: "m",
          label: "male",
        },
        {
          value: "f",
          label: "female",
        },
      ],
    },
    {
      control: "password",
      name: "password",
      label: "Password",
    },
  ],
};

const form2 = {
  name: "addressForm",
  fields: [
    {
      control: "text",
      name: "city",
      label: "City",
      min: 2,
      max: 50,
    },
    {
      control: "select",
      name: "state",
      label: "State",
      options: [
        {
          value: "Alabama",
          label: "Alabama",
        },
        {
          value: "Alaska",
          label: "Alaska",
        },
        {
          value: "Arizona",
          label: "Arizona",
        },
        {
          value: "Arkansas",
          label: "Arkansas",
        },
        {
          value: "California",
          label: "California",
        },
        {
          value: "Colorado",
          label: "Colorado",
        },
        {
          value: "Connecticut",
          label: "Connecticut",
        },
      ],
    },
    {
      control: "text",
      name: "zip",
      label: "ZIP",
      min: 5,
      max: 5,
    },
  ],
};

const firstForm = document.querySelector(".first-form");

form1.fields.forEach((el) => {
  if (el.control === "select") {
    const select = document.createElement("select");
    select.name = el.name;
    el.options.forEach((option) => {
      const opt = document.createElement("option");
      opt.innerHTML = option.label;
      opt.value = option.value;
      select.appendChild(opt);

      select.addEventListener("change", () => {
        localStorage.setItem(select.name, select.value);
      });
    });

    select.value = localStorage.getItem(select.name);

    const label = document.createElement("label");
    label.innerHTML = el.label;
    label.htmlFor = el.name;

    firstForm.appendChild(label);
    firstForm.appendChild(select);
  } else {
    const input = document.createElement("input");
    input.name = el.name;
    input.min = el.min;
    input.max = el.max;
    input.type = el.control;
    input.rows = el.rows;
    const label = document.createElement("label");
    label.innerHTML = el.label;
    label.htmlFor = el.name;

    if (localStorage.getItem(el.name)) {
      if (el.control === "checkbox") {
        input.checked = localStorage.getItem(el.name) === "true";
      } else {
        input.value = localStorage.getItem(el.name);
      }
    }

    input.addEventListener("change", (event) => {
      let value = event.target.value;
      if (event.target.type === "checkbox") {
        value = event.target.checked;
      }
      localStorage.setItem(event.target.name, value);
    });

    firstForm.appendChild(label);
    firstForm.appendChild(input);
  }
});

const secondForm = document.querySelector(".second-form");

form2.fields.forEach((el) => {
  if (el.control === "select") {
    const select = document.createElement("select");
    select.name = el.name;
    el.options.forEach((option) => {
      const opt = document.createElement("option");
      opt.innerHTML = option.label;
      opt.value = option.value;
      select.appendChild(opt);

      select.addEventListener("change", () => {
        localStorage.setItem(select.name, select.value);
      });
    });

    select.value = localStorage.getItem(select.name);

    const label = document.createElement("label");
    label.innerHTML = el.label;
    label.htmlFor = el.name;

    secondForm.appendChild(label);
    secondForm.appendChild(select);
  } else {
    const input = document.createElement("input");
    input.name = el.name;
    input.min = el.min;
    input.max = el.max;
    input.type = el.control;
    const label = document.createElement("label");
    label.innerHTML = el.label;
    label.htmlFor = el.name;

    input.addEventListener("change", (event) => {
      let value = event.target.value;
      localStorage.setItem(event.target.name, value);
    });

    input.value = localStorage.getItem(el.name);

    secondForm.appendChild(label);
    secondForm.appendChild(input);
  }
});

let submt = document.createElement("input");
submt.type = "Submit";
let submt2 = document.createElement("input");
submt2.type = "Submit";
firstForm.appendChild(submt);
secondForm.appendChild(submt2);

firstForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const data = new URLSearchParams(new FormData(firstForm)).toString();
  localStorage.setItem("firstForm", data);
});

secondForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const data = new URLSearchParams(new FormData(secondForm)).toString();
  localStorage.setItem("secondForm", data);
});
