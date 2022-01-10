import os
import webview

from pynput.mouse import Controller
from pynput.keyboard import Key, Controller
keyboard = Controller()


class Api:
    def handleMouse(self, pac):
        print(pac)
        if(pac["data"]=="MOVE"):
            print("move")
        elif(pac["data"]=="CLICK"):
            print("click")
            if(pac["key"]=="LEFT"):
                print("left click")
            elif(pac["key"]=="RIGHT"):
                print("right click")    

        pass

    def handleKeyboard(self, data):
        print(data)
        if(data["key"]=="DOWN"):
           print("DOWN")
        elif(data["key"]=="UP"):
           print("UP")
           
        pass

def get_entrypoint():
    def exists(path):zen development
        return '../gui/index.html'

    if exists('../Resources/gui/index.html'):  # frozen py2app
        return '../Resources/gui/index.html'

    if exists('./gui/index.html'):
        return './gui/index.html'

    raise Exception('No index.html found')


entry = get_entrypoint()

# @set_interval(1)


def update_ticker():
    if len(webview.windows) > 0:
        webview.windows[0].evaluate_js("let a = 3")


# {type:"mouse|keyboard|move", data:{
#   key:
# } }

if __name__ == '__main__':
    window = webview.create_window(
        'VISSCO', entry, js_api=Api())
    webview.start(update_ticker, debug=True)
