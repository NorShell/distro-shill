# How to set it up locally

1. Create a cloudflare account

2. Install node and npm (if not already)

3. Clone the project and run `npm install`

4. Run `npx wrangler login` => this will connect you to your cloufflare account

5. Create a db with `npx wrangler d1 create Distro` (there could be any other name apart from Distro ).
   Once this commands run, you will see the D1 Database id. Swap the default one with yours in the wrangler.json file

6. Atm, you should have a local DB and a remote one. They are not synced.
   To run the migrations from the ./src/db file, use the command
   `npx wrangler d1 execute prod-d1-tutorial --local --file=/path/to/file`
   Note the --local, you can swap that to --remote if you want to have the files be run against the actual db.

7. Now you should be ready to go, run `npm run dev`

Lmk if you have any issues
