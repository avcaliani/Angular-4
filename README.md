# Angular Tips
By Anthony Vilarim Caliani

## Installing Angular CLI

First you need to intall [Node JS](https://nodejs.org/en/).

> You can check your **Node JS** installation using this command `node -v` and `npm -v`.

After you just have to execute this command:
```sh
$ npm install -g @angular/cli
```

You can check your **Angular CLI** installation using this command `ng -v`.
 
Something like that have to be printed:

```sh
$ ng -v
    _                      _                 ____ _     ___
   / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
  / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
 / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
/_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
               |___/
@angular/cli: 1.2.6
node: 6.11.2
os: darwin x64

```

## NG Commands

### New Project

```sh
$ ng new PROJECT-NAME
```

### Install Dependencies

Go to _package.json_ file directory and type:

```sh
$ npm install
```

### Run Project

```sh
# Default
$ ng serve

# Personalized
$ ng serve --host 0.0.0.0 --port 4201
```

Navigate to `http://localhost:<PORT>/`

### New Component

```sh
$ ng generate component my-new-component

# Or
$ ng g component my-new-component
```

---

_Reference: [Angular CLI](https://cli.angular.io/)_


---

_You can find [@avcaliani](#) at [GitHub](https://github.com/avcaliani) or [GitLab](https://gitlab.com/avcaliani)._
