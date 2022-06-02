:set number
:set relativenumber
:set autoindent
:set mouse=a
:set scrolloff=7
:syntax enable

call plug#begin()

Plug 'glepnir/dashboard-nvim'
Plug 'nvim-lua/plenary.nvim' | Plug 'nvim-telescope/telescope.nvim'
Plug 'vim-airline/vim-airline' | Plug 'vim-airline/vim-airline-themes'
Plug 'ellisonleao/gruvbox.nvim'

call plug#end()

" theme (gruvbox)
set background=dark
colorscheme gruvbox
"" theme

" telescope
let g:dashboard_default_executive ='telescope'
"" telescope

" airline
let g:airline#extensions#tabline#enabled = 1
let g:airline_theme='deus'
"" airline

" dashboard (glepnir)
let g:dashboard_custom_header = [
\ ' ███╗   ██╗ ███████╗ ██████╗  ██╗   ██╗ ██╗ ███╗   ███╗',
\ ' ████╗  ██║ ██╔════╝██╔═══██╗ ██║   ██║ ██║ ████╗ ████║',
\ ' ██╔██╗ ██║ █████╗  ██║   ██║ ██║   ██║ ██║ ██╔████╔██║',
\ ' ██║╚██╗██║ ██╔══╝  ██║   ██║ ╚██╗ ██╔╝ ██║ ██║╚██╔╝██║',
\ ' ██║ ╚████║ ███████╗╚██████╔╝  ╚████╔╝  ██║ ██║ ╚═╝ ██║',
\ ' ╚═╝  ╚═══╝ ╚══════╝ ╚═════╝    ╚═══╝   ╚═╝ ╚═╝     ╚═╝',
\ ' par ifvg                                              ',
\]

let g:dashboard_custom_footer = ["s'amuser"]
"" dashboard
