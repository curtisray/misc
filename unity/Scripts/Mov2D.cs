using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// Movement script with basic 2d movement including jumping

public class Mov2D : MonoBehaviour
{
    private Rigidbody2D rb2D;

    private float moveSpeed;
    private float jumpForce;
    private bool isJumping;
    private float moveHorizontal;
    private float  moveVertical;

    // Start is called before the first frame update
    void Start()
    {
        rb2D = gameObject.GetComponent<Rigidbody2D>();

        moveSpeed = 3f;
        jumpForce = 3f;
        isJumping = false;
    }

    // Update is called once per frame
    void Update()
    {
        //check if jumping
        moveHorizontal = Input.GetAxis("Horizontal");
        moveVertical = Input.GetAxis("Vertical"); 
    }

    void FixedUpdate()
    {
        if(moveHorizontal > 0f || moveHorizontal < 0f) {
            rb2D.AddForce(new Vector2(moveHorizontal * moveSpeed, 0), ForceMode2D.Impulse);
        }

        if(!isJumping && moveVertical > 0f) {
            rb2D.AddForce(new Vector2(0f, moveVertical * jumpForce), ForceMode2D.Impulse);
        }
    }

    void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.gameObject.tag == "Platform") {
            isJumping = false;
        }
    }

    void OnTriggerExit2D(Collider2D collision)
    {
        if (collision.gameObject.tag == "Platform") {
            isJumping = true;
        }
    }
}
