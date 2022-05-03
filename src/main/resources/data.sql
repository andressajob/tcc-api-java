--AUTHENTICATION
INSERT INTO users(id, username, password, name, email) VALUES
(1001, 'user', '$2a$10$Qji2/icFWIGGQEAv8bbwNuKGrSZyiUUPqE/0SNO2M.BpU.NA6xPhW', 'Tony Stark','tony@stark.com');
INSERT INTO users(id, username, password, name, email) VALUES
(1002, 'teacher', '$2a$10$mOIHVhc/TKu2QVTZu.WLRefolNr5NOTbRp8IL3F31WkEvAFJ/gGNO', 'Steve Rogers','steve@cap.amer');
INSERT INTO users(id, username, password, name, email) VALUES
(1003, 'admin', '$2a$10$m/3j6fZltLuJVwUM9vEtBe4BWJByEPwn7AsB8TF5KVFin6mpEg20O', 'Administrador','admin@gmail.com');
--ROLES
INSERT INTO roles(id, role) values
(1, 'ROLE_USER'), (2, 'ROLE_TEACHER'), (3, 'ROLE_ADMIN');

-- USER_ROLES
INSERT INTO users_roles (user_id, roles_id) values
(1001, 1), (1002, 2), (1003, 3);

-- REPORT
INSERT INTO report (id, balance, month, year) values
(1001,100,05,2022), (1002,-500,01,2022), (1003,700,11,2021);

-- FINANCES
INSERT INTO finances (id, description, is_cost, month, year, name, value, report_id, user_id) values
(1001, 'descricao', true, 01, 2022, 'compra renner', 150, 1003, 1001),
(1002, 'descricao', false, 01, 2022, 'salariozaum', 1500, 1003, 1001);



