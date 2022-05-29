write('Enter a length for the Quarry')
	local qLength = read()
write('Enter a width for the Quarry')
	local qWidth = read() 
write('Enter a depth for the Quarry')
	local qDepth = read()

local x = 0
local z = 0
local y = 0

function dig() 
    turtle.dig()
    turtle.forward()
end

local lengthGo = tonumber(qLength)
local lengthGone = 0

-- function that digs a comlumn the specified length (qLength)
function digLength()
	while(lengthGo > 0) do
		dig()
		lengthGo = (lengthGo - 1)
		lengthGone = (lengthGone + 1)
	end

	if(lengthGo == 0)then
		-- turtle returns to origin
		while(lengthGone >0) do
			turtle.back()
			lengthGo = (lengthGo + 1)
			lengthGone = (lengthGone - 1)
		end
	else
		error()
	end

	turtle.turnRight()
	dig()
	turtle.turnLeft()
end

local widthGo = tonumber(qWidth)
local widthGone = 0

-- function that repeats the digLength function for the specified width (qWidth)
function digLayer()
	while(widthGo >0) do
		digLength()
		widthGo = (widthGo - 1)
		widthGone = (widthGone + 1)
	end

	turtle.turnRight()
	-- turtle returns to origin
	while(widthGone > 0) do
		turtle.back()
		widthGo = (widthGo + 1)
		widthGone = (widthGone - 1)
	end

	turtle.digDown()
	turtle.down()
end

local depthGo = tonumber(qDepth)
local depthGone = 0

-- repeat the digLayer funtion for the specified depth (qDepth)
while(depthGo > 0) do
	digLayer()
	depthGo = (depthGo - 1)
	depthGone = (depthGone + 1)
end

--turtle returns to origin
while(depthGone > 0) do
	turtle.up()
	depthGo = (depthGo + 1)
	depthGone = (depthGone - 1)
end

--et fin