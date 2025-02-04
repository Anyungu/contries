# Setting Up and Running the Next.js Project

## Prerequisites

Ensure you have Node LTS installed:

- [Node.js LTS](https://nodejs.org/) (version 22.12.0)

## Getting Started

1. **Clone the Repository**

   Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Anyungu/contries
   cd countries
   ```

2. **Install Dependencies**

   Install the required dependencies:

   ```bash
   npm install
   ```

3. **Run the Development Server**

   Start the development server with:

   ```bash
   npm run dev
   ```

4. **Open Your Browser**

   Open [http://localhost:3000](http://localhost:3000) in your browser to see your Next.js application running.

## Building and Running in Production

1. **Build the Application**

   Create an optimized build:

   ```bash
   npm run build
   ```

2. **Start the Production Server**

   After building the application, you can start the production server with:

   ```bash
   npm run start
   ```

3. **Access the Application**

   Open [http://localhost:3000](http://localhost:3000) in your browser to see your Next.js application running in production mode.



## Usage

1. **Search**
Use the search input to filter throught the countries

2. **View More details**
Click on a country in the table to be redirected to a different page withcountry specific details 

## Decisions
1. **NextJS**
Moderd server side data fetching

2. **Zustand**
Simple global data store for page transition

1. **Tailwind && ShadcnUI**
Quick flexing and reusable styled components