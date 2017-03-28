# Requirement Document

## <doc>

- Contains: 1 to n <host>

**Properties**

- Name
- CreateTime 
- LastModify
- Host list

**Actions**

- Create: new Document
- Delete
- Read: Show List


- Create: new host
- Delete: host within host list


## <host> one host one page

- Contains: 1 to n <path> 

*string*

**Actions**

- Create:
- Modify:
- Read: Get host list
- Port: 80 as default

## <path>

**Consist of:**

*Description: describe the api*

- Method: GET,POST,PUT,DELETE

- Request:
	- Accept-Type: application/json
	- Search Param
	- Body Param **(if Method is not GET)**

- Response:
	- Content-Type: application/json
	- Return
		- type: string, number, boolean, array, {}, [] 
	- Dictionary: table used to describe each key
