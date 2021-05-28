# Authentication



## What is OAuth

</br>

**1. What is OAuth?**
- it is like a wweb world-wide service that allows you to recieve some data from more than website, each website requires logon and some authorization from you as a user that requisets a service from this website.
- with OAuth you will be make the logon into one website only and this website will connect to others when you need any service from there.

**2. Give an example of what using OAuth would look like.**
- like when you go to the parking, and you will give the car's key to the employee there, you give him a limitational access to drive the car for a few meters and he don't have to use any private thing into your car. this is very close to the authorization that OAuth gives others websites.

**3. How does OAuth work? What are the steps that it takes to authenticate the user?**
- when you requiset a service, maybe it will have many services inside it. 
- you have to access your data as user in one website.
- after this logon, every service from different website it will access your authorization by OAuth.
- finally you will receive the response for all services that you were sending requiest for them. 

**4. What is OpenID?**
- it is something like OAuth, but OpenID related to authentication, not like OAuth that is related to authorization.
- also, OpenID is accessing data from user to machine, but OAuth is accessing data from machin to machine on behalf of user. 

</br>

## Authorization and Authentication flows
</br>


**1. What is the difference between authorization and authentication?**
- authentication is accessing data from user to machine, but authorization is accessing data from machin to machine on behalf of user.

**2. What is Authorization Code Flow?**
- it is like a representation of the code that will run when OAuth send the authorization, beacuase we can't see the structure of the code itself of this process, for that reason, they were implement the Authorization Code Flow for us.

**3. What is Authorization Code Flow with Proof Key for Code Exchange (PKCE)?**
- with this code flow, you have to use the proof key for code exchange(PKCE) to access your authorization, then your logon. also, for request the APIs. 

**4. What is Implicit Flow with Form Post?**
- this code flow used for the public clients and for the applications that not secuered untill a certain limit.

**5. What is Client Credentials Flow?**
- this is used with machine-to-machine (M2M) applications, such as CLIs, daemons, or services running on your back-end.

**6. What is Device Authorization Flow?**
- we used this with input-constrained devices that connect to the internet.

**7. What is Resource Owner Password Flow?**
- this is uesd with highly-trusted applications, but it is not recomended also.




## Things I want to know more about
- i have to read more about the OAuth.


