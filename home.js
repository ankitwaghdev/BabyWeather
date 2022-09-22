//alert('Javascript linked succesfully')
function getValue (id) {
    text = document.getElementById(id).value; //value of the text input
    if(text=="Rainy")
    {
        alert('Take umbrella with you')
    }
    else if(text=="Cold")
    {
        alert('Carry sweat-shirt with you')
    }
    else if(text=="Hot")
    {
        alert('Carry sunglasses with you')
    }
    else if(text=="Thunderstorm")
    {
        alert('Stay inside your home !!1')
    }
    else
    {
        alert('Enter valid input')
    }
    return false;
}