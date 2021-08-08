# cetus-erp

this project is an MVP for an enterprise purchasing system.

## User

### Entitie

| User       | type      |
|------------|-----------|
| id         | uuid      |
| first_name | varchar   |
| last_name  | varchar   |
| email      | varchar   |
| password   | varchar   |
| avatar     | varchar   |
| created_at | timestamp |
| updated_at | timestamp |

#### repository

```javascript
create(first_name, last_name, email, password): Promise<User>
findByEmail(email): Promise<User>
findById(id): Promise<User>
```

**Functional Requirement** 🚥

- [ ] it shold be able create user
- [ ] it sholdn't be able to create user if already email exist
- [ ] it shold be able update photo user user

**Non-Functional Requirement** 🏗

- [ ] an email provider has to be implemented!
- [ ] an storage provider has to be implemented!

**Business Rules** 💼

- the user has to confirm the registration by email
