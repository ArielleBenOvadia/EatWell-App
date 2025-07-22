EatWell
EatWell is a revolutionary mobile application developed as part of our final project, designed to enhance personal nutrition management through advanced AI-based food recognition and analysis. The app empowers users to make informed food choices by analyzing meal images to provide personalized nutritional information and recommendations.

Features
AI-Based Food Recognition: Simply take a picture of your meal, and our advanced AI algorithms, powered by OpenAI, will recognize the food items and analyze their nutritional content. Nutritional Information: Access detailed nutritional information for a wide variety of foods using the Edamam API to help you make healthier choices. Personalized Recommendations: Get tailored nutritional advice based on your dietary preferences and health goals. Meal Tracking: Keep a log of your meals and track your nutritional intake over time. User-Friendly Interface: Enjoy a seamless and intuitive user experience designed to make nutrition management easy and enjoyable.

AI-Based Food Recognition: Simply take a picture of your meal, and our advanced AI algorithms, powered by OpenAI, will recognize the food items and analyze their nutritional content. Nutritional Information: Access detailed nutritional information for a wide variety of foods using the Edamam API to help you make healthier choices. Personalized Recommendations: Get tailored nutritional advice based on your dietary preferences and health goals. Meal Tracking: Keep a log of your meals and track your nutritional intake over time. User-Friendly Interface: Enjoy a seamless and intuitive user experience designed to make nutrition management easy and enjoyable

Getting Started
To get started with EatWell, follow these steps:

1. Clone the repository: git clone https://github.com/yourusername/eatwell.git

2.Install the dependencies: cd eatwell npm install

3.Set up the environment variables: cp .env.example .env

Edit the .env file to include your own values for the environment variables, including your OpenAI API key and Edamam API credentials.

OPENAI_API_KEY=your_openai_api_key EDAMAM_APP_ID=your_edamam_app_id EDAMAM_APP_KEY=your_edamam_app_key JWT_SECRET=your_jwt_secret JWT_REFRESH_SECRET=your_jwt_refresh_secret JWT_EXPIRATION=your_jwt_expiration

4.Run the application: npm start

Using OpenAI for Food Recognition
EatWell leverages OpenAI's powerful models to recognize food items from images. Ensure you have set your OpenAI API key in the environment variables.

Using Edamam API for Nutritional Values
EatWell uses the Edamam API to fetch detailed nutritional information for recognized food items. Ensure you have set your Edamam API credentials in the environment variables.

Contributing
We welcome contributions from the community. If you would like to contribute to EatWell, please follow these steps:

1.Fork the repository. 2.Create a new branch: git checkout -b feature/your-feature-name 3.Make your changes and commit them: git commit -m "Add your commit message" 4.Push to the branch: git push origin feature/your-feature-name 5.Open a pull request.

Demonstration


https://github.com/user-attachments/assets/24c807f2-a314-4d65-9ce2-13f835e32513
