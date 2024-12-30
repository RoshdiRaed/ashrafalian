# Contact Form Project

A professional contact form web application that allows users to send messages via EmailJS with a beautifully styled frontend using TailwindCSS. The application also includes dynamic notifications for success and error states.

## Features

- **Responsive Design:** Built with TailwindCSS for a fully responsive layout.
- **Email Integration:** Sends emails seamlessly using [EmailJS](https://www.emailjs.com/).
- **Dynamic Notifications:** Provides real-time feedback for successful or failed email submissions.
- **Modern UI:** Clean and elegant design optimized for user experience.

## Live Demo

[View Live Demo](#) (Add the live link once deployed)

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/contact-form.git
   cd rs-next-v2
   ```

2. **Install Dependencies**

   Ensure you have Node.js installed, then run:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**

   Create a `.env.local` file in the root directory and add the following:

   ```env
   NEXT_PUBLIC_EMAILJS_USER_ID=your_emailjs_public_key
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   ```

   Replace `your_emailjs_public_key`, `your_service_id`, and `your_template_id` with the values from your EmailJS account.

4. **Run the Development Server**

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000`.

## Usage

1. Open the application in a browser.
2. Fill in the form fields (Name, Email, Message).
3. Submit the form to send an email via EmailJS.
4. Observe success or error notifications based on the outcome.

## Folder Structure

```plaintext
.
├── public
│   ├── images         # All static images
├── src
│   ├── app
│   │   ├── page.js    # Main application file
├── .env.local          # Environment variables (not included in the repo)
├── package.json        # Project dependencies
├── tailwind.config.js  # TailwindCSS configuration
└── README.md           # Project documentation
```

## Technologies Used

- **Framework:** Next.js
- **Styling:** TailwindCSS
- **Email Service:** EmailJS

## Contributing

Contributions are welcome! If you'd like to contribute:

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature-name
   ```

3. Commit your changes:

   ```bash
   git commit -m "Add your message"
   ```

4. Push to the branch:

   ```bash
   git push origin feature-name
   ```

5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any inquiries, feel free to reach out:

- **Author:** Ashraf Alian
- **Email:** [your_email@example.com](mailto:your_email@example.com)
- **Website:** [Your Portfolio](https://yourportfolio.com)
