```javascript
// Professional Website Demo JavaScript

document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded Successfully");

    const forms = document.querySelectorAll("form");

    forms.forEach(form => {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Demo only! Form submitted successfully.");
        });
    });
});
```
