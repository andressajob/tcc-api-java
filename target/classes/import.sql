--USERS
INSERT INTO users(id, username, password, name, email, enabled) VALUES (1001, 'user', '$2a$10$Qji2/icFWIGGQEAv8bbwNuKGrSZyiUUPqE/0SNO2M.BpU.NA6xPhW', 'Tony Stark','tony@stark.com', true);
--AUTHORITIES
INSERT INTO authorities(id, authority, username) VALUES (1, 'USER', 'user');
-- REPORT
INSERT INTO report (id, balance, month, year) VALUES (1001,100,05,2022), (1002,-500,01,2022), (1003,700,11,2021);
-- FINANCES
INSERT INTO finances (id, description, cost, month, year, name, value, report_id, user_id) VALUES (1002, 'descricao', false, 01, 2022, 'salariozaum', 1500, 1003, 1001),(1003, 'descricaoCompraMarisa', true, 01, 2022, 'compra marisa', 250, 1003, 1001),(1001, 'descricao', true, 01, 2022, 'compra renner', 150, 1003, 1001);
