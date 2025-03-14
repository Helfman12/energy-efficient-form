(function() {
    emailjs.init("rx1xzUVkvGoKlA3ow"); // החלף ב-User ID שלך
})();

document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // מונע רענון של הדף

    // אוסף את הנתונים מהטופס
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const address = document.getElementById('address').value;
    const age = document.getElementById('age').value;
    const zipCode = document.getElementById('zipCode').value;
    const email = document.getElementById('email').value;
    const energyEfficiency = document.querySelector('input[name="energyEfficiency"]:checked').value;
    const income = document.querySelector('input[name="income"]:checked').value;
    const seniorCitizen = document.querySelector('input[name="seniorCitizen"]:checked').value;
    const monthlyExpenses = document.getElementById('monthlyExpenses').value;
    const savingType = document.getElementById('savingType').value;
    const electricityBill = document.getElementById('electricityBill').value;
    const waterBill = document.getElementById('waterBill').value;
    const gasBill = document.getElementById('gasBill').value;
    const projects = Array.from(document.querySelectorAll('input[name="projects"]:checked'))
                         .map(project => project.value);
    const monthlyBudget = document.getElementById('monthlyBudget').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const appointmentDate = document.getElementById('appointmentDate').value;

    // שם הלקוח המלא
    const customerName = `${firstName} ${lastName}`;

    // תוכן המייל כטקסט פשוט עם קווים מפרידים
    const response = `
Application Approval

Dear Matthew,

I am pleased to inform you that your client, ${customerName}, has been approved for the program. Below are the details of the approval:

--------------------------------
Company Information
- Company Name: David Star Construction

--------------------------------
Customer Information
- Customer Name: ${customerName}
- Address: ${address}
- Phone Number: ${phoneNumber}

--------------------------------
Project Information
- Program Status: Confirmed
- Project Manager: Matthew Bar
- Appointment Date: ${appointmentDate}
- Product: ${projects.length > 0 ? projects.join(', ') : 'No products selected'}

--------------------------------
Utility Bills
- Electricity: $${electricityBill}
- Water: $${waterBill}
- Gas: $${gasBill}

--------------------------------
Customer Benefits
- Rebate: 15% off
- Finance Options: Available

--------------------------------
Reminder: Rebates are valid for the same business day. Please ensure that a material order is submitted by 6:30 PM.

Should you have any questions or need further assistance, please feel free to reach out.

Best regards,
    `;

    // שולח את המייל באמצעות EmailJS
    emailjs.send("service_rewjveb", "template_aiilvt2", {
        email: "matthewrnvt@gmail.com", // מייל קבוע
        message: response
    }).then(function(response) {
        // הצגת הודעת הצלחה
        document.getElementById('successMessage').style.display = 'block';
        // ניקוי הטופס
        document.getElementById('applicationForm').reset();
        console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
        alert('Error sending the form: ' + error.text);
        console.log('FAILED...', error);
    });
});