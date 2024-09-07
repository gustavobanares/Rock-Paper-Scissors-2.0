function Footer(){
    return(
        <footer class=" flex items-center justify-center bg-slate-400">

        <div class="flex h-full flex-col items-center justify-between">

            <button id="viewRules" class=" mt-4 flex justify-center text-sm bg-white hover:bg-slate-800 px-6 py-2 rounded hover:text-white text-black">View rules</button>

            <small class="mt-2">
                Developed by
                <a class="transition-all hover:text-white" target="_blank" href="https://github.com/gustavobanares"> Gustavo Bañares</a>
            </small>
            
        
        </div>

    </footer>
   )          
}

export default Footer