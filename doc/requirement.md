# Requirement Document

## <doc>

- Contains: 1 to n <host>

**Properties**

- Name
- CreateTime 
- LastModify

**Actions**

- Create: new Document
- Delete
- Read: Show List

## <host> one host one page

- Contains: 1 to n <path> 

*string*

**Actions**

- Create:
- Delete:
- Modify:
- Read: Get host list


## <path>

**Consist of:**

*Description: describe the api*

- Method: GET,POST,PUT,DELETE
- Port: 80 as default

- Request:
	- Accept-Type: application/json
	- Search Param
	- Body Param **(if Method is not GET)**

- Response:
	- Content-Type: application/json
	- Return
		- type: string, number, boolean, {}, []
	- Dictionary: table used to describe each key