document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-nft-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      description: formData.get("description"),
      royalty: formData.get("royalty"),
      size: formData.get("size"),
      tags: formData.get("tags"),
      currency: formData.get("currency"),
      price: formData.get("price"),
      stock: formData.get("stock"),
      putOnSale: formData.get("putOnSale") ? true : false,
      directSale: formData.get("directSale") ? true : false,
    };

    console.log("Form JSON:", JSON.stringify(data, null, 2));

    alert("Form submitted! Check the console for JSON.");

    form.reset();
  });
});