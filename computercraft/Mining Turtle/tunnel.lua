--creates a tunnel

--moves the turtle foward through blocks or otherwise
function moveForward()
    if turtle.detect() == true then
        turtle.dig()
        turtle.forward()
    else 
        turtle.forward()
    end
end

--digs a segment of a tunnel, two tall
function tunnel()
    moveForward()
    turtle.digUp()
end

--begining of the script
write('How long would you like the tunnel?'+'\n')

local tunnelLength = tonumber(read())

local distanceGo = tunnelLength
local distanceGone = 0

while distanceGo > 0 do
    tunnel()
    return distanceGo - 1
    return distanceGone + 1
end

if distanceGo < 1 then 
    while distanceGone > 0 do
        turtle.back()
        return distanceGo + 1
        return distanceGone - 1
    end
end

--en fin