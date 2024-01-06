import React from "react";
import { IconProps } from "./types";

export const Resources: React.FC<IconProps> = ({
  size = 18,
  fill = "#4C4E64",
  ...rest
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <mask
        id="path-1-outside-1_1493_75248"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="26"
        height="26"
        fill="black"
      >
        <rect fill="white" width="26" height="26" />
        <path d="M24.6572 11.2267L22.9308 10.9511C22.8607 10.9404 22.7947 10.9086 22.7397 10.8591C22.6847 10.8097 22.6429 10.7445 22.6188 10.6707C22.5684 10.5218 22.514 10.3773 22.4564 10.2289C22.4265 10.1574 22.4147 10.0783 22.4224 9.99991C22.4301 9.92157 22.4569 9.84706 22.5 9.78444L23.5436 8.23778C23.6014 8.15224 23.6295 8.04641 23.6227 7.9397C23.616 7.833 23.5748 7.73259 23.5068 7.65689L21.8068 5.768C21.7387 5.69242 21.6483 5.64668 21.5523 5.63917C21.4562 5.63166 21.361 5.66288 21.284 5.72711L19.8904 6.888C19.8332 6.93555 19.7653 6.96482 19.6942 6.97265C19.623 6.98048 19.5513 6.96658 19.4868 6.93244C19.3604 6.87156 19.2304 6.81111 19.0936 6.75467C19.0274 6.72733 18.9692 6.68043 18.9252 6.61903C18.8812 6.55762 18.8531 6.48404 18.844 6.40622L18.596 4.49067C18.582 4.38512 18.5343 4.28871 18.4616 4.21902C18.3889 4.14934 18.296 4.11103 18.2 4.11111H16.2C16.199 3.28632 15.9037 2.49561 15.3788 1.91239C14.854 1.32918 14.1423 1.00106 13.4 1H1.8C1.58783 1 1.38434 1.09365 1.23431 1.26035C1.08429 1.42705 1 1.65314 1 1.88889V24.1111C1 24.3469 1.08429 24.573 1.23431 24.7397C1.38434 24.9064 1.58783 25 1.8 25H13.4C14.1423 24.9989 14.854 24.6708 15.3788 24.0876C15.9037 23.5044 16.199 22.7137 16.2 21.8889H18.2C18.2962 21.8889 18.3892 21.8504 18.4619 21.7805C18.5346 21.7105 18.5822 21.6138 18.596 21.508L18.844 19.5898C18.8537 19.5119 18.8823 19.4385 18.9268 19.3774C18.9713 19.3163 19.0299 19.2699 19.0964 19.2431C19.2304 19.1871 19.3604 19.1267 19.494 19.0627C19.5581 19.03 19.6289 19.0172 19.699 19.0257C19.7691 19.0343 19.8358 19.0638 19.892 19.1111L21.284 20.2707C21.361 20.3349 21.4562 20.3661 21.5523 20.3586C21.6483 20.3511 21.7387 20.3054 21.8068 20.2298L23.5068 18.3409C23.5748 18.2652 23.616 18.1648 23.6227 18.0581C23.6295 17.9514 23.6014 17.8455 23.5436 17.76L22.4988 16.2116C22.456 16.1479 22.4297 16.0726 22.4226 15.9935C22.4156 15.9145 22.4281 15.8348 22.4588 15.7631C22.5136 15.6227 22.568 15.4782 22.6188 15.3262C22.6434 15.2527 22.6856 15.188 22.7409 15.1391C22.7961 15.0902 22.8624 15.059 22.9324 15.0489L24.6564 14.7733C24.7518 14.7582 24.839 14.7054 24.9021 14.6246C24.9652 14.5438 25 14.4403 25 14.3333V11.6667C25 11.5598 24.9654 11.4565 24.9024 11.3757C24.8395 11.2948 24.7524 11.242 24.6572 11.2267ZM15.4 13.4444H12.6V7.22222H15.4V13.4444ZM12.6 14.3333H15.4V18.3333C15.3994 18.9225 15.1884 19.4873 14.8135 19.9039C14.4386 20.3205 13.9302 20.5548 13.4 20.5556H12.6V14.3333ZM16.2 10.4871C16.4566 10.3848 16.7273 10.3328 17 10.3333C17.6365 10.3333 18.247 10.6143 18.6971 11.1144C19.1471 11.6145 19.4 12.2928 19.4 13C19.4 13.7072 19.1471 14.3855 18.6971 14.8856C18.247 15.3857 17.6365 15.6667 17 15.6667C16.7273 15.6672 16.4566 15.6152 16.2 15.5129V10.4871ZM15.4 4.11111V6.33333H12.6V1.88889H13.4C13.9302 1.88959 14.4386 2.12395 14.8135 2.54054C15.1884 2.95714 15.3994 3.52196 15.4 4.11111ZM11.8 1.88889V20.5556H10.2V1.88889H11.8ZM1.8 20.5556V14.3333H9.4V20.5556H1.8ZM1.8 7.22222H9.4V13.4444H1.8V7.22222ZM9.4 1.88889V6.33333H1.8V1.88889H9.4ZM13.4 24.1111H1.8V23.2222H13.4V22.3333H1.8V21.4444H13.4C13.7729 21.4445 14.142 21.3616 14.4855 21.2004C14.829 21.0393 15.14 20.8032 15.4 20.5062V21.8889C15.3994 22.478 15.1884 23.0429 14.8135 23.4595C14.4386 23.8761 13.9302 24.1104 13.4 24.1111ZM24.2 13.9484L22.8216 14.1707C22.6086 14.2027 22.4075 14.2986 22.2398 14.448C22.0721 14.5974 21.9441 14.7946 21.8696 15.0187C21.824 15.1547 21.7744 15.2853 21.728 15.404C21.6387 15.6204 21.6038 15.8597 21.627 16.0965C21.6502 16.3332 21.7308 16.5585 21.86 16.7484L22.6956 17.9867L21.4864 19.3302L20.374 18.4031C20.2042 18.2596 20.0026 18.1697 19.7906 18.143C19.5786 18.1164 19.364 18.1539 19.1696 18.2516C19.0552 18.3067 18.9376 18.3618 18.818 18.4116C18.6161 18.4938 18.4382 18.6355 18.3032 18.8216C18.1683 19.0076 18.0815 19.2309 18.052 19.4676L17.8536 21H16.2V16.4391C16.6734 16.5771 17.169 16.5927 17.6487 16.4845C18.1284 16.3764 18.5793 16.1474 18.9668 15.8152C19.3544 15.483 19.6682 15.0565 19.8841 14.5685C20.1 14.0804 20.2122 13.5438 20.2122 13C20.2122 12.4562 20.1 11.9196 19.8841 11.4315C19.6682 10.9435 19.3544 10.517 18.9668 10.1848C18.5793 9.85261 18.1284 9.62364 17.6487 9.51548C17.169 9.40732 16.6734 9.42285 16.2 9.56089V5H17.8536L18.0536 6.53156C18.0825 6.76822 18.1687 6.9917 18.3032 7.17804C18.4376 7.36439 18.6152 7.50656 18.8168 7.58933C18.9392 7.64 19.0568 7.69511 19.1636 7.74667C19.3584 7.84574 19.5738 7.88441 19.7868 7.85859C19.9998 7.83277 20.2026 7.74342 20.3736 7.6L21.488 6.67156L22.6972 8.01511L21.8628 9.25111C21.7337 9.43982 21.6528 9.6638 21.6288 9.89936C21.6048 10.1349 21.6385 10.3733 21.7264 10.5893C21.776 10.7164 21.8256 10.8471 21.8704 10.98C21.9444 11.2043 22.072 11.402 22.2394 11.552C22.4068 11.7019 22.6078 11.7984 22.8208 11.8311L24.2016 12.0533L24.2 13.9484Z" />
      </mask>
      <path
        d="M24.6572 11.2267L22.9308 10.9511C22.8607 10.9404 22.7947 10.9086 22.7397 10.8591C22.6847 10.8097 22.6429 10.7445 22.6188 10.6707C22.5684 10.5218 22.514 10.3773 22.4564 10.2289C22.4265 10.1574 22.4147 10.0783 22.4224 9.99991C22.4301 9.92157 22.4569 9.84706 22.5 9.78444L23.5436 8.23778C23.6014 8.15224 23.6295 8.04641 23.6227 7.9397C23.616 7.833 23.5748 7.73259 23.5068 7.65689L21.8068 5.768C21.7387 5.69242 21.6483 5.64668 21.5523 5.63917C21.4562 5.63166 21.361 5.66288 21.284 5.72711L19.8904 6.888C19.8332 6.93555 19.7653 6.96482 19.6942 6.97265C19.623 6.98048 19.5513 6.96658 19.4868 6.93244C19.3604 6.87156 19.2304 6.81111 19.0936 6.75467C19.0274 6.72733 18.9692 6.68043 18.9252 6.61903C18.8812 6.55762 18.8531 6.48404 18.844 6.40622L18.596 4.49067C18.582 4.38512 18.5343 4.28871 18.4616 4.21902C18.3889 4.14934 18.296 4.11103 18.2 4.11111H16.2C16.199 3.28632 15.9037 2.49561 15.3788 1.91239C14.854 1.32918 14.1423 1.00106 13.4 1H1.8C1.58783 1 1.38434 1.09365 1.23431 1.26035C1.08429 1.42705 1 1.65314 1 1.88889V24.1111C1 24.3469 1.08429 24.573 1.23431 24.7397C1.38434 24.9064 1.58783 25 1.8 25H13.4C14.1423 24.9989 14.854 24.6708 15.3788 24.0876C15.9037 23.5044 16.199 22.7137 16.2 21.8889H18.2C18.2962 21.8889 18.3892 21.8504 18.4619 21.7805C18.5346 21.7105 18.5822 21.6138 18.596 21.508L18.844 19.5898C18.8537 19.5119 18.8823 19.4385 18.9268 19.3774C18.9713 19.3163 19.0299 19.2699 19.0964 19.2431C19.2304 19.1871 19.3604 19.1267 19.494 19.0627C19.5581 19.03 19.6289 19.0172 19.699 19.0257C19.7691 19.0343 19.8358 19.0638 19.892 19.1111L21.284 20.2707C21.361 20.3349 21.4562 20.3661 21.5523 20.3586C21.6483 20.3511 21.7387 20.3054 21.8068 20.2298L23.5068 18.3409C23.5748 18.2652 23.616 18.1648 23.6227 18.0581C23.6295 17.9514 23.6014 17.8455 23.5436 17.76L22.4988 16.2116C22.456 16.1479 22.4297 16.0726 22.4226 15.9935C22.4156 15.9145 22.4281 15.8348 22.4588 15.7631C22.5136 15.6227 22.568 15.4782 22.6188 15.3262C22.6434 15.2527 22.6856 15.188 22.7409 15.1391C22.7961 15.0902 22.8624 15.059 22.9324 15.0489L24.6564 14.7733C24.7518 14.7582 24.839 14.7054 24.9021 14.6246C24.9652 14.5438 25 14.4403 25 14.3333V11.6667C25 11.5598 24.9654 11.4565 24.9024 11.3757C24.8395 11.2948 24.7524 11.242 24.6572 11.2267ZM15.4 13.4444H12.6V7.22222H15.4V13.4444ZM12.6 14.3333H15.4V18.3333C15.3994 18.9225 15.1884 19.4873 14.8135 19.9039C14.4386 20.3205 13.9302 20.5548 13.4 20.5556H12.6V14.3333ZM16.2 10.4871C16.4566 10.3848 16.7273 10.3328 17 10.3333C17.6365 10.3333 18.247 10.6143 18.6971 11.1144C19.1471 11.6145 19.4 12.2928 19.4 13C19.4 13.7072 19.1471 14.3855 18.6971 14.8856C18.247 15.3857 17.6365 15.6667 17 15.6667C16.7273 15.6672 16.4566 15.6152 16.2 15.5129V10.4871ZM15.4 4.11111V6.33333H12.6V1.88889H13.4C13.9302 1.88959 14.4386 2.12395 14.8135 2.54054C15.1884 2.95714 15.3994 3.52196 15.4 4.11111ZM11.8 1.88889V20.5556H10.2V1.88889H11.8ZM1.8 20.5556V14.3333H9.4V20.5556H1.8ZM1.8 7.22222H9.4V13.4444H1.8V7.22222ZM9.4 1.88889V6.33333H1.8V1.88889H9.4ZM13.4 24.1111H1.8V23.2222H13.4V22.3333H1.8V21.4444H13.4C13.7729 21.4445 14.142 21.3616 14.4855 21.2004C14.829 21.0393 15.14 20.8032 15.4 20.5062V21.8889C15.3994 22.478 15.1884 23.0429 14.8135 23.4595C14.4386 23.8761 13.9302 24.1104 13.4 24.1111ZM24.2 13.9484L22.8216 14.1707C22.6086 14.2027 22.4075 14.2986 22.2398 14.448C22.0721 14.5974 21.9441 14.7946 21.8696 15.0187C21.824 15.1547 21.7744 15.2853 21.728 15.404C21.6387 15.6204 21.6038 15.8597 21.627 16.0965C21.6502 16.3332 21.7308 16.5585 21.86 16.7484L22.6956 17.9867L21.4864 19.3302L20.374 18.4031C20.2042 18.2596 20.0026 18.1697 19.7906 18.143C19.5786 18.1164 19.364 18.1539 19.1696 18.2516C19.0552 18.3067 18.9376 18.3618 18.818 18.4116C18.6161 18.4938 18.4382 18.6355 18.3032 18.8216C18.1683 19.0076 18.0815 19.2309 18.052 19.4676L17.8536 21H16.2V16.4391C16.6734 16.5771 17.169 16.5927 17.6487 16.4845C18.1284 16.3764 18.5793 16.1474 18.9668 15.8152C19.3544 15.483 19.6682 15.0565 19.8841 14.5685C20.1 14.0804 20.2122 13.5438 20.2122 13C20.2122 12.4562 20.1 11.9196 19.8841 11.4315C19.6682 10.9435 19.3544 10.517 18.9668 10.1848C18.5793 9.85261 18.1284 9.62364 17.6487 9.51548C17.169 9.40732 16.6734 9.42285 16.2 9.56089V5H17.8536L18.0536 6.53156C18.0825 6.76822 18.1687 6.9917 18.3032 7.17804C18.4376 7.36439 18.6152 7.50656 18.8168 7.58933C18.9392 7.64 19.0568 7.69511 19.1636 7.74667C19.3584 7.84574 19.5738 7.88441 19.7868 7.85859C19.9998 7.83277 20.2026 7.74342 20.3736 7.6L21.488 6.67156L22.6972 8.01511L21.8628 9.25111C21.7337 9.43982 21.6528 9.6638 21.6288 9.89936C21.6048 10.1349 21.6385 10.3733 21.7264 10.5893C21.776 10.7164 21.8256 10.8471 21.8704 10.98C21.9444 11.2043 22.072 11.402 22.2394 11.552C22.4068 11.7019 22.6078 11.7984 22.8208 11.8311L24.2016 12.0533L24.2 13.9484Z"
        fill={fill}
        fillOpacity="0.87"
      />
      <path
        d="M24.6572 11.2267L22.9308 10.9511C22.8607 10.9404 22.7947 10.9086 22.7397 10.8591C22.6847 10.8097 22.6429 10.7445 22.6188 10.6707C22.5684 10.5218 22.514 10.3773 22.4564 10.2289C22.4265 10.1574 22.4147 10.0783 22.4224 9.99991C22.4301 9.92157 22.4569 9.84706 22.5 9.78444L23.5436 8.23778C23.6014 8.15224 23.6295 8.04641 23.6227 7.9397C23.616 7.833 23.5748 7.73259 23.5068 7.65689L21.8068 5.768C21.7387 5.69242 21.6483 5.64668 21.5523 5.63917C21.4562 5.63166 21.361 5.66288 21.284 5.72711L19.8904 6.888C19.8332 6.93555 19.7653 6.96482 19.6942 6.97265C19.623 6.98048 19.5513 6.96658 19.4868 6.93244C19.3604 6.87156 19.2304 6.81111 19.0936 6.75467C19.0274 6.72733 18.9692 6.68043 18.9252 6.61903C18.8812 6.55762 18.8531 6.48404 18.844 6.40622L18.596 4.49067C18.582 4.38512 18.5343 4.28871 18.4616 4.21902C18.3889 4.14934 18.296 4.11103 18.2 4.11111H16.2C16.199 3.28632 15.9037 2.49561 15.3788 1.91239C14.854 1.32918 14.1423 1.00106 13.4 1H1.8C1.58783 1 1.38434 1.09365 1.23431 1.26035C1.08429 1.42705 1 1.65314 1 1.88889V24.1111C1 24.3469 1.08429 24.573 1.23431 24.7397C1.38434 24.9064 1.58783 25 1.8 25H13.4C14.1423 24.9989 14.854 24.6708 15.3788 24.0876C15.9037 23.5044 16.199 22.7137 16.2 21.8889H18.2C18.2962 21.8889 18.3892 21.8504 18.4619 21.7805C18.5346 21.7105 18.5822 21.6138 18.596 21.508L18.844 19.5898C18.8537 19.5119 18.8823 19.4385 18.9268 19.3774C18.9713 19.3163 19.0299 19.2699 19.0964 19.2431C19.2304 19.1871 19.3604 19.1267 19.494 19.0627C19.5581 19.03 19.6289 19.0172 19.699 19.0257C19.7691 19.0343 19.8358 19.0638 19.892 19.1111L21.284 20.2707C21.361 20.3349 21.4562 20.3661 21.5523 20.3586C21.6483 20.3511 21.7387 20.3054 21.8068 20.2298L23.5068 18.3409C23.5748 18.2652 23.616 18.1648 23.6227 18.0581C23.6295 17.9514 23.6014 17.8455 23.5436 17.76L22.4988 16.2116C22.456 16.1479 22.4297 16.0726 22.4226 15.9935C22.4156 15.9145 22.4281 15.8348 22.4588 15.7631C22.5136 15.6227 22.568 15.4782 22.6188 15.3262C22.6434 15.2527 22.6856 15.188 22.7409 15.1391C22.7961 15.0902 22.8624 15.059 22.9324 15.0489L24.6564 14.7733C24.7518 14.7582 24.839 14.7054 24.9021 14.6246C24.9652 14.5438 25 14.4403 25 14.3333V11.6667C25 11.5598 24.9654 11.4565 24.9024 11.3757C24.8395 11.2948 24.7524 11.242 24.6572 11.2267ZM15.4 13.4444H12.6V7.22222H15.4V13.4444ZM12.6 14.3333H15.4V18.3333C15.3994 18.9225 15.1884 19.4873 14.8135 19.9039C14.4386 20.3205 13.9302 20.5548 13.4 20.5556H12.6V14.3333ZM16.2 10.4871C16.4566 10.3848 16.7273 10.3328 17 10.3333C17.6365 10.3333 18.247 10.6143 18.6971 11.1144C19.1471 11.6145 19.4 12.2928 19.4 13C19.4 13.7072 19.1471 14.3855 18.6971 14.8856C18.247 15.3857 17.6365 15.6667 17 15.6667C16.7273 15.6672 16.4566 15.6152 16.2 15.5129V10.4871ZM15.4 4.11111V6.33333H12.6V1.88889H13.4C13.9302 1.88959 14.4386 2.12395 14.8135 2.54054C15.1884 2.95714 15.3994 3.52196 15.4 4.11111ZM11.8 1.88889V20.5556H10.2V1.88889H11.8ZM1.8 20.5556V14.3333H9.4V20.5556H1.8ZM1.8 7.22222H9.4V13.4444H1.8V7.22222ZM9.4 1.88889V6.33333H1.8V1.88889H9.4ZM13.4 24.1111H1.8V23.2222H13.4V22.3333H1.8V21.4444H13.4C13.7729 21.4445 14.142 21.3616 14.4855 21.2004C14.829 21.0393 15.14 20.8032 15.4 20.5062V21.8889C15.3994 22.478 15.1884 23.0429 14.8135 23.4595C14.4386 23.8761 13.9302 24.1104 13.4 24.1111ZM24.2 13.9484L22.8216 14.1707C22.6086 14.2027 22.4075 14.2986 22.2398 14.448C22.0721 14.5974 21.9441 14.7946 21.8696 15.0187C21.824 15.1547 21.7744 15.2853 21.728 15.404C21.6387 15.6204 21.6038 15.8597 21.627 16.0965C21.6502 16.3332 21.7308 16.5585 21.86 16.7484L22.6956 17.9867L21.4864 19.3302L20.374 18.4031C20.2042 18.2596 20.0026 18.1697 19.7906 18.143C19.5786 18.1164 19.364 18.1539 19.1696 18.2516C19.0552 18.3067 18.9376 18.3618 18.818 18.4116C18.6161 18.4938 18.4382 18.6355 18.3032 18.8216C18.1683 19.0076 18.0815 19.2309 18.052 19.4676L17.8536 21H16.2V16.4391C16.6734 16.5771 17.169 16.5927 17.6487 16.4845C18.1284 16.3764 18.5793 16.1474 18.9668 15.8152C19.3544 15.483 19.6682 15.0565 19.8841 14.5685C20.1 14.0804 20.2122 13.5438 20.2122 13C20.2122 12.4562 20.1 11.9196 19.8841 11.4315C19.6682 10.9435 19.3544 10.517 18.9668 10.1848C18.5793 9.85261 18.1284 9.62364 17.6487 9.51548C17.169 9.40732 16.6734 9.42285 16.2 9.56089V5H17.8536L18.0536 6.53156C18.0825 6.76822 18.1687 6.9917 18.3032 7.17804C18.4376 7.36439 18.6152 7.50656 18.8168 7.58933C18.9392 7.64 19.0568 7.69511 19.1636 7.74667C19.3584 7.84574 19.5738 7.88441 19.7868 7.85859C19.9998 7.83277 20.2026 7.74342 20.3736 7.6L21.488 6.67156L22.6972 8.01511L21.8628 9.25111C21.7337 9.43982 21.6528 9.6638 21.6288 9.89936C21.6048 10.1349 21.6385 10.3733 21.7264 10.5893C21.776 10.7164 21.8256 10.8471 21.8704 10.98C21.9444 11.2043 22.072 11.402 22.2394 11.552C22.4068 11.7019 22.6078 11.7984 22.8208 11.8311L24.2016 12.0533L24.2 13.9484Z"
        stroke="#4C4E64"
        strokeOpacity="0.87"
        strokeWidth="0.4"
        mask="url(#path-1-outside-1_1493_75248)"
      />
    </svg>
  );
};