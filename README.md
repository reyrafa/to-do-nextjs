This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

==================================================================================
=============== To Do List Application with AI integration(GROQ) =================
==================================================================================

API endpoint : https://to-do-api-k5st.onrender.com/api

Login : {
    route: '/v1/login',
    method: POST,
    body: {
        email: (required, email) ,
        password: (required)
    },
    success response: {
        success: true,
        message: User Log in successfully,
        data: {
            user: { 
                user: array
            },
            token: **token**
        },
        status: 200
    },
    error response: {
        success: false, 
        message: credentials do not match our records,
        status: 401
    }
}

Logout : {
    route: '/v1/logout',
    method: POST,
    Authorization: Bearer Token,
    success response: {
        success: true,
        message: User is successfully logged out.,
        status: 200
    },
     error response: {
   
    }
}

Register : {
    route: '/v1/register',
    method: POST,
    body: {
        name: (string)
        email: (required, email, unique) ,
        password: (required, min: 8),
        password_confirmation: (required)
    },
    success response: {
        success: true,
        message: User is created successfully,
        data: {
            user: array,
        },
        status: 200
    },
    error response: {
        success: false, 
        message: Validation failed,
        errors: errors
    }
}

Create Task : {
    route: '/v1/tasks',
    method: POST,
    Authorization: Bearer Token,
    body: {
        title: string
    },
    success response: {
        success: true,
        message: Task Created Successfully,
        status: 201
    },
    error response: {
        success: false, 
        message: Validation failed,
        errors: errors
    }
}

Show my Tasks : {
    route: '/v1/tasks',
    method: GET,
    Authorization: Bearer Token,
    success response: {
        data: tasks
        status: 200
    },
    error response: {
        
    }
}

Show a specific owned task : {
    route: '/v1/tasks/{uuid}',
    method: GET,
    Authorization: Bearer Token,
    success response: {
        success: true,
        message: Task successfully fetched,
        data: tasks
        status: 200
    },
     error response: {
        success: false, 
        message: Cannot be found,
        status: 404
    }
}

Update a specific owned task : {
    route: '/v1/tasks/{uuid}',
    method: PUT,
    Authorization: Bearer Token,
    Body: {
        "title" : required, string,
        "priority" : nullable, string | (low, medium, high),
        "due_date" : nullable, date
    },
    success response: {
        success: true,
        message: Task updated successfully,
        data: tasks
        status: 200
    },
     error response: {
        success: false, 
        message: Validation Error,
        status: 422
    }
}

Delete a specific owned task : {
    route: '/v1/tasks/delete/{uuid}',
    method: POST,
    Authorization: Bearer Token,
    success response: {
        success: true,
        message: Task deleted successfully,
        status: 200
    },
     error response: {
        success: false, 
        message: Not Found,
        status: 404
    }
}



