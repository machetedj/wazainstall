#!/bin/bash
#
# Print banner art.

#######################################
# Print a board. 
# Globals:
#   BG_BROWN
#   NC
#   WHITE
#   CYAN_LIGHT
#   RED
#   GREEN
#   YELLOW
# Arguments:
#   None
#######################################
print_banner() {

  clear

  printf "\n\n"

printf "${GREEN}";  
printf "██████╗ ██╗   ██╗██████╗ ██╗  ██╗██╗   ██╗██╗ ██████╗ \n";
printf "██╔══██╗██║   ██║██╔══██╗██║ ██╔╝╚██╗ ██╔╝██║██╔═══██╗\n";
printf "██║  ██║██║   ██║██████╔╝█████╔╝  ╚████╔╝ ██║██║   ██║\n";
printf "██║  ██║██║   ██║██╔══██╗██╔═██╗   ╚██╔╝  ██║██║   ██║\n";
printf "██████╔╝╚██████╔╝██║  ██║██║  ██╗   ██║██╗██║╚██████╔╝\n";
printf "╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝╚═╝╚═╝ ╚═════╝ \n";
printf "${NC}";

printf "${WHITE} Debes utilizar UBUNTU 20.04 en tu servidor para una instalacion sin errores:${GRAY_LIGHT}"

  printf "\n"
}
