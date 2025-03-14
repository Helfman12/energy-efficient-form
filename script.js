(function() {
    emailjs.init("rx1xzUVkvGoKlA3ow"); // החלף ב-User ID שלך

    // פונקציות לשליחת המייל מחוץ לבלוק ה-submit
    const sendToFirstEmail = () => {
        return emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
            email: "matthewrnvt@gmail.com",
            message: ""
        }).then(result => {
            console.log('First email sent to matthewrnvt@gmail.com:', result.status, result.text);
            return result;
        }).catch(error => {
            console.error('Error sending to matthewrnvt@gmail.com:', error);
            return Promise.reject(error);
        });
    };

    const sendToSecondEmail = () => {
        return emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
            email: "mogassconstruction@gmail.com",
            message: ""
        }).then(result => {
            console.log('Second email sent to mogassconstruction@gmail.com:', result.status, result.text);
            return result;
        }).catch(error => {
            console.error('Error sending to mogassconstruction@gmail.com:', error);
            return Promise.reject(error);
        });
    };
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
    const annualIncome = document.getElementById('annualIncome').value;
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

    // עיבוד מספר הטלפון לפורמט עם מקפים (למשל, 1234567890 -> 123-456-7890)
    let formattedPhoneNumber = phoneNumber;
    if (phoneNumber.length === 10) {
        formattedPhoneNumber = `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    }

    // תוכן המייל כטקסט פשוט עם קווים מפרידים
    const response = `
Energy Efficient Program Qualification

Dear Matthew,

I am pleased to inform you that your client, ${customerName}, has been approved for the program. Below are the details of the approval:

--------------------------------
Company Information
- Company Name: David Star Construction

--------------------------------
Customer Information
- Customer Name: ${customerName}
- Address: ${address}
- Phone Number: ${formattedPhoneNumber}

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
Additional Information
- Annually Income: $${annualIncome}
- Senior Citizen: ${seniorCitizen}
- Monthly Expenses: $${monthlyExpenses}
- Most Valuable Saving: ${savingType}

--------------------------------
Reminder: Rebates are valid for the same business day. Please ensure that a material order is submitted by 6:30 PM.

Should you have any questions or need further assistance, please feel free to reach out.

Best regards,
    `;

    // עדכון ה-message בפונקציות
    sendToFirstEmail = () => {
        return emailjs.send("service_rewjveb", "template_aiilvt2", {
            email: "matanhelfman@gmail.com",
            message: response
        }).then(result => {
            console.log('First email sent to matanhelfman@gmail.com:', result.status, result.text);
            return result;
        }).catch(error => {
            console.error('Error sending to matthewrnvt@gmail.com:', error);
            return Promise.reject(error);
        });
    };

    sendToSecondEmail = () => {
        return emailjs.send("service_rewjveb", "template_aiilvt2", {
            email: "mogassconstruction@gmail.com",
            message: response
        }).then(result => {
            console.log('Second email sent to mogassconstruction@gmail.com:', result.status, result.text);
            return result;
        }).catch(error => {
            console.error('Error sending to mogassconstruction@gmail.com:', error);
            return Promise.reject(error);
        });
    };

    // שולח את שני המיילים במקביל עם Promise.all
    Promise.all([sendToFirstEmail(), sendToSecondEmail()])
        .then(() => {
            // הצגת הודעת הצלחה לאחר שליחת שני המיילים
            document.getElementById('successMessage').style.display = 'block';
            document.getElementById('applicationForm').reset();
            console.log('Both emails sent successfully!');
        })
        .catch(function(error) {
            alert('Error sending the form: ' + (error.text || error));
            console.log('FAILED...', error);
        });
});