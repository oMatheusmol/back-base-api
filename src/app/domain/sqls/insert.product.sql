INSERT INTO Product (
	productName,
	price,
	amount,
	insertAt,
	modifyAt
)
VALUES (
      @productName,
      @price,
      @amount,
      GETDATE(),
      NULL 
)

SELECT @@IDENTITY AS 'CodigoProduct';  