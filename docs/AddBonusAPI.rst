Add Bonus (API)
===============

Etch allows a bonus (includes rewards) to be added by calling the API which has these fields populated - 

* token
* bonus
* target
* bonusName
* bonusType
* day
* month
* year
* ineq (0,1)
* authkey

API call to -
https://etch-prepare-for-takeoff.com/api/addBonus

Postman::
POST /api/addBonus HTTP/1.1
Host: etch-prepare-for-takeoff.com
Content-Type: application/x-www-form-urlencoded
Cache-Control: no-cache
Postman-Token: e5f63271-180c-a3d3-f5b2-ba773b314559

token=ETH&bonus=3000000000000000000&target=100&bonusName=spacenew1&bonusType=Team&day=20&month=03&year=2019&ineq=0&authkey=0256e888-a082-4383-9126-aa9295c06cd5
