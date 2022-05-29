-- Mining Turtle Quarry Script

-- Mines a quarry of the specified length, width, and depth.
-------------------------

-- To Do --

-- function for general turtle movement and digging
-- function (with parameters) for digging the specified dims

-------------------------

--function collection

local lengthGone = 0
local widthGone = 0
local depthGone = 0

function moveForward(distance)
    while distance > 0 do
        if turtle.detect() == true then
            turtle.dig()
            turtle.forward()
        else
            turtle.forward()
        end
        distance = distance - 1
    end
end

function turnAround()
    turtle.turnRight()
    turtle.turnRight()
end

function length(width)
    while lengthGone < length then
        moveForward(1)
        lengthGone = lengthGone + 1
    end

    if lengthGone == length do
        turnAround()
        moveForward(lengthGone)
        lengthGone = 0
        turtle.turnLeft()
        moveForward(1)
        turtle.turnLeft()
    end
end

function depth(depth)
    length(width)
end

function quarry(length, width, depth)
    depth(depth)
end 

--beginning of script

quarry(length, width, depth)

--en fin