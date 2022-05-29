using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// movement script that allows for movement in all directions on a 2-dimentional (vector) plane

/*
    CHANGES
    
    - added max speed
    - disables acceleration past max speed
    - allows for different vertical and horizontal max speeds

*/

public class Move4(1.2) : MonoBehaviour
{
    private Rigidbody2D rb2D;

    private float moveVertical;
    private float moveHorizontal;
    
    public float zontMoveSpeed;
    public float vertMoveSpeed;
    private Vector2 currentSpeed;
    public Vector2 maxSpeed;

    //
    private bool validSpeed;


    void Start()
    {
        rb2D = gameObject.GetComponent<Rigidbody2D>();
        currentSpeed = gameObject.GetComponent<Rigidbody2D>().velocity;
        Debug.Log(currentSpeed);
    }

    void Update()
    {
        
    }

    // To change the feel of the movement, edit the 'movement speed' (Move4) as well as the 'linear drag' (Rigidbody 2D)
    void FixedUpdate() 
    {
        moveHorizontal = Input.GetAxis("Horizontal");
        moveVertical = Input.GetAxis("Vertical");

        // check if current speed is under max speed
        if (currentSpeed > maxSpeed)
        {
            validSpeed = true;
        }

        // allow acceleration while under the speed limit
        while (validSpeed == true)
        {
            // horizontal accelerator
            if (moveHorizontal > 0f)
            {
                moveHorizontal = zontMoveSpeed * moveHorizontal;
                rb2D.AddForce(new Vector2(moveHorizontal, 0), ForceMode2D.Impulse);
            }

            if (moveHorizontal < 0f)
            {
                moveHorizontal = zontMoveSpeed * moveHorizontal;
                rb2D.AddForce(new Vector2(moveHorizontal, 0), ForceMode2D.Impulse)
            }

            // vertical accelerator
            if (moveVertical > 0f)
            {
                moveVertical = vertMoveSpeed * moveVertical;
                rb2D.AddForce(new Vector2(0, moveVertical), ForceMode2D.Impulse);
            }

            if (moveVertical < 0f)
            {
                moveVertical = vertMoveSpeed * moveVertical;
                rb2D.AddForce(new Vector2(0, moveVertical), ForceMode2D.Impulse)
            }
        }
    }
}