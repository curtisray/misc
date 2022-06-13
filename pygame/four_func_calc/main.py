#! SUPER DUPER ALPHA VERSION !#

import pygame
import sys

pygame.init()

# const

WINDOW_DIMS = (600, 600)
BACKGROUND_COLOR = pygame.Color("#deb887")
ACCENT_COLOR = pygame.Color("#696969")
FONT_STYLE = None
FONT_SIZE = 30

## const

# window
screen = pygame.display.set_mode(WINDOW_DIMS)
pygame.display.set_caption("The Four Function Calculator")
screen.fill(BACKGROUND_COLOR)
## window

# vars
clock = pygame.time.Clock()
user_font = pygame.font.Font(FONT_STYLE, FONT_SIZE)
user_text = ""
## vars

# to-render
input_rect = pygame.Rect(100, 260, 200, 40)
##

# mainloop
while True:
    for event in pygame.event.get():
        # terminate app
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
        # get text input
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_BACKSPACE:
                user_text = user_text[:-1]
                user_text += event.unicode
            else:
                user_text += event.unicode

    # actions
    pygame.draw.rect(screen, ACCENT_COLOR, input_rect, 4)

    text_surface = user_font.render(user_text, True, (255, 255, 255))
    screen.blit(text_surface, (input_rect.x+5, input_rect.y+10))
    ##

    #variables
    fps = clock.get_fps()
    runtime = pygame.time.get_ticks()


    pygame.display.update()
    clock.tick(60)
## mainloop
