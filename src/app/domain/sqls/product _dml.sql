CREATE TABLE Product(
	id INT NOT NULL IDENTITY,
	productName varchar(40) NOT NULL,
	price MONEY NOT NULL,
	amount INT NOT NULL,
	insertAt  DATETIME NOT NULL CONSTRAINT DF_Product_insertAt DEFAULT GETDATE(),
	modifyAt DATETIME NULL,
	CONSTRAINT PK_Product_CodigoProduct PRIMARY KEY (id)
)