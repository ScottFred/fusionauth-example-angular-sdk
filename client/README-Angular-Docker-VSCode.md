Build the Docker Container with:

cd <project>/client
docker build --target development -t angular-fusionauth .

---

Run the Docker Container with:

docker run -it -v $(pwd):/app -p 4200:4200 angular-fusionauth 

Verify that you can access the Angular page by opening a browser and navigating to: localhost:4200

---

For this Development mode, you can also start the Angular Server in VS Code and be able to debug the Angular application from within VS Code.

Again, make sure you are in the <project>/client directory:
cd <project>/client

Start VS Code with the current directory
code .

When VS Code detects the /.devcontainer directory and asks if you want to restart VS Code in
the DevContainer, select "Reopen in Container".

Select the "Debug" icon along the left hand side of VS Code.

Select the "play"-icon next to the "ng serve" text in the Debug window

The Angular Server should start and you should again be able to access the default HTML page, but this time at a different port: localhost:3000


