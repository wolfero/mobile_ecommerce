# POSTMAN DOCUMENTATION

https://documenter.getpostman.com/view/27344284/2s946bBESb

# SUMMARY

This test consists of creating a mini-application for purchasing mobile devices.

- The application will have only two views:
  1. Main view - Product listing
  2. Product details
- The implementation of the designs is left to the developer's choice but should follow the structure defined in the screenshots. The level of detail in the proposal will be positively evaluated.
- React/Preact must be used for application development and can be complemented with other JS libraries if deemed appropriate.
- The use of JS with ES6 is allowed, and it is preferable not to use Typescript for this test.
- A boilerplate template can be used to create the project structure.
- The application will be a Single Page Application (SPA) where client-side routing will be added, without being a Multi-Page Application (MPA) or using SSR.
- The project must include the following scripts for managing the application:
  1. START - Development mode
  2. BUILD - Compilation for production mode
  3. TEST - Launch tests
  4. LINT - Code checking
- The project must be presented in an open-source code repository (Github, Gitlab, Bitbucket) with the solution to the problem. The code should be uploaded progressively to achieve milestones.
- The repository must include a README document (preferably included in the first commit), which explains how to run the project and provides any necessary explanatory notes or additional information.

### VIEW DESCRIPTIONS

#### PLP - Product List Page

- This page will display the list of products.
- The page will show all the items returned by the API request.
- It will allow filtering of the content based on the search criteria entered by the user.
- When a product is selected, it should navigate to the product details page.
- A maximum of four items will be displayed per row, and the layout should be responsive based on the resolution.

#### PDP - Product Details Page

- This page will be divided into two columns:
  - The first column will display the product image component.
  - The second column will display the product details and actions.
- It should include a link to navigate back to the product list.

### COMPONENT DESCRIPTIONS

#### Header Component

- The title or icon of the application will act as a link to the main view.
- It will display breadcrumbs showing the current page the user is on and a link for navigation.
- On the right side of the header, it will show the number of items added to the shopping cart.

#### Search Bar Component

- It will display an input field where the user can enter a search query.
- The user can filter the products based on the entered text, which will be compared with the Brand and Model of the products.
- The filtering will be in real-time, meaning a search will be triggered each time the user changes the search criteria.

#### List Item Component

- It will display the following product information:
  - Image
  - Brand
  - Model
  - Price

#### Product Image Component

- It will display the product image.

#### Product Description Component

- It will display the details associated with the product. It will include at least the following attributes:
  - Brand
  - Model
  - Price
  - CPU
  - RAM
  - Operating System
  - Screen Resolution
  - Battery
  - Cameras
  - Dimensions
  - Weight

#### Product Actions Component

- It will display two types of selectors where the user can choose the type of product to add to the cart. It will show selector options for the following attributes:

  - Storage
  - Colors

- Even if there is only one option, the selector should still be displayed with the information. In this use case, it should be selected by default.
- It will show an "Add" button. Once the user selects the options, they can add the product to the cart.
- When adding a product through the API, the following information needs to be sent:
  - Product identifier
  - Selected color code
  - Selected storage capacity code
- The add request will return the number of products in the cart in the response. This value should be displayed in the header of the application on any view. Therefore, the data needs to be persisted.
