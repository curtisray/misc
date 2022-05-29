#file for testing purposes (git, pygame)

import pygame

# window specs
(width, height) = (650, 450)
screen = pygame.display.set_mode((width, height))
## window specs

pygame.display.flip()

# terminate
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
## terminate
