## tic tac toe game using pygame

import pygame as pg
import sys

pg.init()

# constants

WINDOW_DIMS = (600, 600)
BACKGROUND_COLOR = pg.Color("#deb887")
ACCENT_COLOR = pg.Color("#696969")

## constants

window = pg.display.set_mode(WINDOW_DIMS)
pg.display.set_caption("Tic Tac Toe")
window.fill(BACKGROUND_COLOR)

def draw_lines():
    # 1 vert
    pg.draw.line(window, ACCENT_COLOR, (150, 150), (150, 450), 10)
    # 2 vert
    pg.draw.line(window, ACCENT_COLOR, (300, 150), (300, 450), 10)
    # 3 vert
    pg.draw.line(window, ACCENT_COLOR, (450, 150), (450, 450), 10)
    # 1 zont
    # 2 zont
    # 3 zont

draw_lines()

# mainloop
while True:
    for event in pg.event.get():
        if event.type == pg.QUIT:
            sys.exit()
    ## close window

    
    pg.display.update()
## mainloop
