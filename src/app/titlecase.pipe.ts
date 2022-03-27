import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'Titlecase'
})


export class TitleCasePipe implements PipeTransform
{
    MakeTitleCase(word:string)
    {
        return  word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
    }
    transform(content: string, args?: any) {
        if(content==null)
        return null;

        var alphas:string[];
        alphas = content.split(" ");
        for(let i=0;i<alphas.length;i++)
        {

            if(i==0)
            {
                alphas[0] = this.MakeTitleCase(alphas[0]);
            }
            else if(alphas[i].length>3)
            {
                alphas[i] = this.MakeTitleCase(alphas[i]);
            }
            else if(alphas[i]==="." || alphas[i]==="-" || alphas[i]===":")
            {
                if(i+1<alphas.length)
                {
                    alphas[i+1] = this.MakeTitleCase(alphas[i+1]);
                }
            }
            else
            {
                alphas[i] = alphas[i].toLowerCase();
            }
        }

        content = alphas.join(" ");
        return content;
    }

}