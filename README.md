# capstone4155
Capstone Project for ITSC 4155

## Running the application

### Frontend

For detailed instructions on how to run the frontend, 
see [FrontEnd/angular-code-inspectors/README.md](FrontEnd/angular-code-inspectors/README.md).

Quick start for development:
```bash
cd FrontEnd/angular-code-inspectors
npm install
npm run start
```


### Backend

Copy the `application.properties.example` file to `application.properties` and fill in the values for your environment:
```bash
cp cci/src/main/resources/application.properties.default cci/src/main/resources/application.properties
vim cci/src/main/resources/application.properties
```

Quick start for development:
```bash
cd cci
./gradlew bootRun
```