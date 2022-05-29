using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// movement script that allows for movement in all directions on a 2-dimentional (vector) plane

public class Move4(1.1) : MonoBehaviour
{
    private float moveVertical;
    private float moveHorizontal;
    
    public float moveSpeed;
    private Vector2 currentSpeed;

    private Rigidbody2D rb2D;


    void Start()
    {
        rb2D = gameObject.GetComponent<Rigidbody2D>();
    }

    void Update()
    {
        
    }

    // To change the feel of the movement, edit the movement speed (Move4) as well as the drag (Rigidbody 2D)
    void FixedUpdate() 
    {
        moveHorizontal = Input.GetAxis("Horizontal");
        moveVertical = Input.GetAxis("Vertical");

        // Moves the player horizontally
        if (moveHorizontal > 0f || moveHorizontal < 0f)
        {   
            moveHorizontal = moveHorizontal * moveSpeed;
            rb2D.AddForce(new Vector2(moveHorizontal, 0), ForceMode2D.Impulse);
        }

        // Moves the player vertically
        if (moveVertical > 0f || moveVertical < 0f)
        {
            moveVertical = moveVertical * moveSpeed;
            rb2D.AddForce(new Vector2(0f, moveVertical), ForceMode2D.Impulse);
        }
    }
}