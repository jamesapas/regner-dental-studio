import {ImageResponse} from 'next/og';
import {readFile} from 'node:fs/promises';
import {join} from 'node:path';

export const alt='Regner Dental Studio – Creating Smiles That Last';
export const size={width:1200,height:630};
export const contentType='image/png';

export default async function Image(){
  const photo=await readFile(join(process.cwd(),'public/hero-clinic-reference.jpg'));
  const src=`data:image/jpeg;base64,${photo.toString('base64')}`;
  return new ImageResponse(
    <div style={{width:'100%',height:'100%',display:'flex',background:'#F9F3EC',color:'#13273F'}}>
      <div style={{width:'56%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',padding:'0 72px'}}>
        <div style={{width:64,height:4,background:'#553C36',marginBottom:36}}/>
        <div style={{fontSize:76,lineHeight:1,letterSpacing:'-0.03em',display:'flex',flexDirection:'column'}}>
          <span>REGNER</span>
          <span>DENTAL STUDIO</span>
        </div>
        <div style={{fontSize:40,fontStyle:'italic',color:'#553C36',marginTop:24}}>Creating Smiles That Last</div>
        <div style={{fontSize:22,color:'#553C36',marginTop:40,letterSpacing:'0.2em',textTransform:'uppercase'}}>Zurich, Switzerland</div>
      </div>
      <img src={src} alt="" width={528} height={630} style={{width:'44%',height:'100%',objectFit:'cover'}}/>
    </div>,
    size
  );
}

