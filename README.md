## Image Processing API

## Before everything, you need to install npm:

        npm install

## For building the project:

        npm run build

## For starting the server:

        npm run start

## For testing:

        npm run test

## For prettier:

        npm run prettier

## For lint:

        npm run lint


## Examples:

1- localhost:3000 

        -- should display the main router

2- /images 

        -- should display a message prompting the user to enter a filename parameter at least

3- /images/?filename=jsljff346 

        -- should again prompt the user to enter a valid filename parameter.

4- /images/?filename=pasta 

        -- should display the origiinal pasta picture.

5- /images/?filename=pizza&width=400height=200 

        -- should create a thumbnails file (if it doesn't exist already) and resize the pasta image to the specified dimensions and add a new copy of it (pizza200x400) to thumbnails and display it on the browser.

## 6- if the previous endpoint got accessed again it will only retrieve and display the pizza

7- /images/?filename=burger&height=300 

        -- should prompt the user to enter a valid width parameter.

8- /images/?filename=pizza&width=400 

        -- should prompt the user to enter a valid height parameter.

9-/images/?filename=pizza&height=4624&width=klsjfsk 

        -- should prompt the user to enter a valid width parameter.

10- /images/?filename=pasta&height=-3&width=500 

        -- should prompt the user to enter a valid height parameter.

11- /images/?filename=pizza&height=500f&width=3456 

        -- should prompt the user to enter a valid height parameter.


## note: code for endpoint API testing is from the Udacity lesson itself, with modification as to match my endpoint

## All pictures are from [Unsplash]: https://unsplash.com/