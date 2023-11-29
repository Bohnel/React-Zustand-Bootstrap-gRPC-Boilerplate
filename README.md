# BOILERPLATE 

## Commands

| cmd          | Purpose                                           |
| ------------ | ------------------------------------------------- |
| install      | Install npm dependencies                          |
| run gen-proto| build proto files                                 |
| preview      | Starts prod env on local machine                  |
| make         | Pipeline commans                                  |
|  - image     | Prod build of current state                       |
|  - image_push| Push image to server                              |


## Stack

| Tool         | Purpose                                           |
| ------------ | ------------------------------------------------- |
| React        | A JavaScript library for building user interfaces |
| Zustand      | Minimalist state management                       |
| TypeScript   | Static typing for JavaScript                      |
| Vite         | Build tool and development server                 |
| gRPC         | Fast datasynchonization with Go backend           |
| proto-ts     | Protoc compiler compatible with ES6 and TypeScript|

| Folder      | Description                                                                                          |
|-------------|------------------------------------------------------------------------------------------------------|
| **`src/`**   | Contains the main source code for the application.                                                   |
| `components`| Reusable React components, each handling a specific piece of the UI.                                  |
| `hooks`     | Custom React hooks that encapsulate logic and behaviors which can be reused across different components.  |
| `lib`       | Miscellaneous utility functions, helpers, and other standalone pieces of logic.                          |
| `pages`     | Components representing full pages in the application, typically corresponding to routes.                |
| `routes`    | Configuration and components related to routing in the application.                                     |
| `services`  | Functions or classes that handle tasks like API calls, data processing, or other "service"-like tasks.    |
| `store`     | Zustand st ores for state management, holding |
| **`public/`**   | Contains static assets like images, fonts, and the entry HTML file. Assets in this directory are served directly and are not processed by bundlers like Vite. |
