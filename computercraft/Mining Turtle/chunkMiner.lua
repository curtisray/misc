-- program that will mine a specified number of connected chunks

--function that moves the turtle forward
function forward()
    if turtle.detect() == true then
        turtle.dig()
        turtle.forward()
    else
        turtle.forward()
    end
end

--function that mines one layer of one chunk **TEST**
function mineChunkLayer() 
    turtle.digDown()
    turtle.down()
    
    local chunkLength = 16
    local chunkWidth =16

    repeat
        repeat 
            turtle.dig()
            local chunkLength = chunkLength - 1
        until(chunkLength == 0)

        turtle.turnRight()
        forward()
        turtle.turnRight()

    until(chunkWidth == 0)
end

--function that mines a column
function mineChunk()
    local chunkLength = 16
    local chunkWidth = 16

    local bedrock = turtle.inspect()

    while bedrock.name() == "minecraft:bedrock" do
        return local stop = true
    end

    local distanceGone = 0

    if stop == true then
        while distanceGone > 0 do
            turtle.up()
            return distanceGone - 1
        end
    end
