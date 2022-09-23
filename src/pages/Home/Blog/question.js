import React from 'react';

const question = () => {
    return (
        <div>
            <h2>Question-1: Difference between javascript and nodejs?</h2>
      <p>
        Ans: It is a scripting language, but JS is basically the ECMA script's
        updated version. Javascript is mainly utilised in making the HTML web
        pages more dynamic and interactive. It is a high-level language, and it
        makes use of the Oops concept. Yet, it is based primarily on the concept
        of prototype inheritance.It is a runtime environment for Javascript that
        lets a user run this programming language on the server-side as
        well.NodeJS helps us run JS outside the browser as well.Some very
        commonly used Node.JS modules are Express, Lodash, etc. All of these
        modules need to be imported from the npm.The Node.JS, on the other hand,
        isn't capable enough to add various HTML tags or It is a JS runtime
        environment that lets Javascript to be run on the server-side. It is
        cross-platform, and it thus allows the JS code to run outside any
        browser easily. There are various modules in NodeJS, and it is mainly
        utilised in the process of web development.It is a programming language.
        We use JS mainly to write scripts on a website that makes web pages more
        dynamic in nature.We can only run JS on browsers.Some very popular JS
        frameworks are TypedJS, RamdaJS, etc.The JS can easily add HTML and even
        play with the DOM.JavaScript is a simple programming language that runs
        in any browser JavaScript Engine. Whereas Node JS is an interpreter or
        running environment for a JavaScript programming language that holds
        many excesses, it requires libraries that can easily be accessed from
        JavaScript programming for better use.
      </p>
      <h2>
        Question-2: When should you use nodejs and when should you use mongodb?
      </h2>
      <p>
        Ans:Node.js and MongoDB are two different technologies used for two
        different purposes. Node.js is a server-side development platform
        whereas MongoDB is a database. So, the answer to this question can be
        split into two parts:1. The difference between Node.js and MongoDB2.
        Node.js with MongoDB. The first one is very simple. If you want to
        develop a web application that runs on a server, then using Node.js is a
        great choice. It's very fast, lightweight and easy to learn. On the
        other hand, if you want to store data, you should use MongoDB, which is
        a document-based database. It's fast and flexible and allows you to
        store, search and sort your data in many different ways. <br /> Node.js
        is popularly being used in web applications because it lets the
        application run while it is fetching data from the backend server. It is
        asynchronous, event-driven and helps to build scalable web applications.
        Even though Node.js works well with MySQL database, the perfect
        combination is a NoSQL like MongoDB wherein the schema need not be
        well-structured. MongoDB represents the data as a collection of
        documents rather than tables related by foreign keys. This makes it
        possible for the varied types of data dealt over the internet to be
        stored decently and accessed in the web applications using Node.js.
        Another option is using CouchDB that also stores the data as JSON/BSON
        environment.Node.js is a Javascript-based environment that is easily
        understood by most of the browsers. Here, the Javascript is Server-Side
        instead of serving client-side. Node.js is definitely fast and it allows
        to explore a dynamic range of data at real-time. It allows code sharing.
        Node.js acts as a proxy server and allows seamless real-time data
        streaming. The most important reason for the rising popularity of
        Node.js is that the programmer can code the server-side as well as
        client-side using it. Node.js is an interpreted, familiar and flexible
        language.
      </p>
      <h2>Question-3: What is the purpose of jwt and how does it work?</h2>
      <p>
        Ans: JWT, or JSON Web Token, is an open standard used to share
        information between two parties securely — a client and a server. In
        most cases, it's an encoded JSON containing a set of claims and a
        signature. It's usually used in the context of other authentication
        mechanisms like OAuth, OpenID to share user-related information. It's
        also a popular way to authenticate/authorize users in a microservice
        architecture. JWT authentication is a token-based stateless
        authentication mechanism. It is popularly used as a client-side-based
        stateless session, this means the server doesn't have to completely rely
        on a data store (or) database to save session information. JWTs can be
        encrypted, but they are typically encoded and signed. We will be
        focusing on Signed JWTs. The purpose of Signed JWT is not to hide the
        data but to ensure the authenticity of the data. And that is why it's
        highly recommended to use HTTPS with Signed JWTs.When it comes to API
        authentication and server-to-server authorization, JSON web token (JWT)
        is particularly a useful technology. In terms of Single Sign-On (SSO),
        it means that a service provider can receive trustworthy information
        from the authentication server. By sharing a secret key with the
        Identity Provider, the Service Provider can hash a part of a token it
        receives and compare it to the signature of the token. Now, if that
        result matches the signature, the SP knows that the information provided
        has come from the other entity possessing the key.JSON Web Token, is an
        open standard used to share security information between two parties — a
        client and a server. Each JWT contains encoded JSON objects, including a
        set of claims. JWTs are signed using a cryptographic algorithm to ensure
        that the claims cannot be altered after the token is issue
      </p>
        </div>
    );
};

export default question;